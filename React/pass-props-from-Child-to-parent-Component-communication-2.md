## Another Implementation of child to parent data flow

### For passing from child to parent - pass one callback function from parent to child and then use this passed-down function in the child to send something back to parent.

Parent

```js
class ParentComponent extends React.Component {
  state: { language: "" };

  handleLanguage = langValue => {
    this.setState({ language: langValue });
  };

  render() {
    return (
      <div className="col-sm-9">
        <SelectLanguage onSelectLanguage={this.handleLanguage} />
      </div>
    );
  }
}
```

Child

```js
var json = require("json!../languages.json");
var jsonArray = json.languages;

export class SelectLanguage extends React.Component {
  state = {
    selectedCode: "",
    selectedLanguage: jsonArray[0]
  };

  // 'dropdown' is a variable which I have access to in this child

  handleLangChange = () => {
    var lang = this.dropdown.value;
    this.props.onSelectLanguage(lang);
  };

  render() {
    return (
      <div>
        <DropdownList
          ref={ref => (this.dropdown = ref)}
          data={jsonArray}
          valueField="lang"
          textField="lang"
          caseSensitive={false}
          minLength={3}
          filter="contains"
          onChange={this.handleLangChange}
        />
      </div>
    );
  }
}
```
