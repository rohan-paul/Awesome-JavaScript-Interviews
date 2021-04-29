Even if you implement take(1) still you may need to pass an unsubscription function. Below example 

```js
  downloadFunction() {
    let taskId: number;
    this.downloadSubscription = this.taskId$
      .pipe(
        take(1),
        mergeMap(taskId => {
          taskId = taskId;
          return this.bulkImportWizardService.downloadTemplateWithIssues(
            taskId
          );
        })
      )
      .subscribe(blob => {
        fileSaver.saveAs(blob, `template_with_issues_${taskId}.xlsx`);
      });
    this.trackSubscription(this.downloadSubscription);
  }
```

And in above trackSubscription() is a separate function coming from a mixin that will manage subscription and unsubscription (onNgOnDestroy)


### Reason to still unsubscribe() even with take(1)

Some subscriptions only have to happen once during the application startup. They might be needed to kick-start some processing or fire the first request to load the initial data.
In such scenarios we can use RxJS take(1) operator which is great because it automatically unsubscribes after the first execution.

But note that the take(1) will not fire (and complete the observable stream) in case the original observable never emits. We have to make sure we only use it in cases where this can’t happen or provide additional unsubscription handling! 

That take(1) still doesn’t unsubscribe when component is being destroyed. The subscription remains active until first value is emitted no matter if component is active or destroyed. So if we do something more crazy, like accessing the DOM, in our subscription — we might end up with an error in the console

[https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0](https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0)