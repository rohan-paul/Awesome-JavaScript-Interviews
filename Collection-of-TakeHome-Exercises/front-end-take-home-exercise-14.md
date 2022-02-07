# ExampleCompany take home test

This is a frontend exercise that will give you a chance to see some of the things we build at ExampleCompany.

At ExampleCompany we want to make instructing AI systems as intuitive as teaching a colleague. Right now, machine learning instruction happens primarily through providing hundreds of hand labelled examples, so we want to make that process as easy, intuitive and _fun_ as possible.

For this task, we look at the problem of [named-entity recognition (NER)](https://en.wikipedia.org/wiki/Named-entity_recognition). We would like you to build an annotation interface for NER – to display a textual document and be able to label spans of text with one of a handful of classes.

### Requirements

- the user needs to be able to read the document
- select a span of text
- assign one of the predefined labels `['person', 'organization', 'location', 'misc']` to the text.
- the user can see the state of the highlighted text
- the user can remove an annoation
- the annotations should be available as a JSON array of objects with the following structure of start and end indexes, the inside text, and the label

```
[{"start": 12, "end": 30, "text": "Southampton United", label: 'organization'},]
```

How you do this is up to you! People can spend a long time annotating documents like this, so some thought to making intuitive, robust and maybe even fun is wanted.

# Guidelines

We'd like you to spend no more than 3-4 hours working on this. Please let us know how much time you spent so we can calibrate our expectations.

# Hints / Tips

- This initial code is using React. If you'd prefer to use other libraries or frameworks, you're welcome to.
- You can use any libraries, frameworks, tools you want.
- Pick any UI toolkit or component library (Bootstrap, TailwindCSS, Ant Design etc.) you'd like to use, but try to make everything look consistent.
- How you want to store state is up to you.
- It doesn't have to look pixel perfect and it doesn't need amazing animations, but we do care a lot about UX and usability at ExampleCompany.
- Paying attention to details like padding, alignment, and cursors is appreciated!
- Handle the UX edge-cases! For example, what happens when the spans overflow a single line?

# Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Run the following commands to get started.

```
cd app
npm start
```

You can clear out the file structure as you wish.

Any questions, let us know! team@humanloop.com
