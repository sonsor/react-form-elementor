# React Form Elementor
This package provide you a react based shared library to manage basic form element in react so you not waste you time doing that again and again.
## Installation
```
npm i react-form-elementor --save
```

## How To Use
To use the elements you first need to import the element and a `events` function  from react-form-elementor. check the below code.
```
... some code
import { TextBox, events } from 'react-form-elementor';
... some code
class Form extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            firstName: 'John Doe'
        };
    }
    ... some code

    render() {
        return (
            <TextBox name="firstName" value={this.state.name} onChange={this.onChange} />
        )
    }
    ... some code
}

export default events(Form);
```

**Note.** please be carefull you need to pass state key name as element name property like show in above example.


## Components
Here is some basic element that are provided.
<details>
<summary>Text Box</summary>
<p>

This is a `<input type="text" />` element. Below is the code to import this component.
```
import { TextBox } from 'react-form-elementor';
```
###### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or integer
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Text Area</summary>
<p>


This is a `<textarea>` element. Below is the code to import this component.
```
import { TextArea } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- classes: eiter state or string of class names
- rows: either state variable or integer
- cols: either state variable or integer
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Password</summary>
<p>

This is a `<input type="password" />` element. Below is the code to import this component.
```
import { Password } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or boolean integer
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Hidden</summary>
<p>

This is a `<input type="hidden" />` element. Below is the code to import this component.
```
import { Hidden } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value
- placeholder: String
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- maxLength: either state variable or boolean integer
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Check Box</summary>
<p>

This is a `<input type="checkbox" />` element. Below is the code to import this component.
```
import { CheckBox } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value (this is the state value)
- default: either state variable or a string value (this wil goes in value attribute for field)
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onClick (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onMouseDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onMouseUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Radio Box</summary>
<p>

This is a `<input type="radio" />` element. Below is the code to import this component.
```
import { RadioBox } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value (this is the state value)
- default: either state variable or a string value (this wil goes in value attribute for field)
- disabled: either state variable or boolean value
- readOnly:  either state variable or boolean value
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onClick (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onMouseDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onMouseUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Drop Down</summary>
<p>

This is a `<select>` element. Below is the code to import this component.
```
import { DropDown } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable or a string value 
- options: Array of object like `[{label: 'test', value: 1}]`
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>Multi Select</summary>
<p>

This is a `<select multiple="true"></select` element. Below is the code to import this component.
```
import { MultiSelect } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable of Array type or a Array value 
- options: Array of object like `[{label: 'test', value: 1}]`
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>
<details>
<summary>File</summary>
<p>

This is a `<input type="file" />` element. Below is the code to import this component.
```
import { File } from 'react-form-elementor';
```
##### Attributes
- name: String
- value: either state variable of Array type or a Array value 
- disabled: either state variable or boolean value
- classes: eiter state or string of class names
- multiple: boolean
##### Events
- onChange (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onBlur (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onFocus (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyPress (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyDown (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
- onKeyUp (value, name, event)
    - params: 
        - value: String
        - name: String (the name of the field)
        - event: Object (the Event Object)
</p>
</details>