
# dropdown
```javascript
  <Dropdown openOnRender={ true } dropdownText={ 'dropdown title' } direction={ 'left' } style_override={ 'dropdown__1' }>
       <li> first element   </li>
       <li> secrond element </li>
       <li> third element   </li>
  </Dropdown>
```
| props    | description | proptype |
| ---------|-------------| -------- |
| children | your list of content that is shown when the dropdown is triggered | HTML |
| openOnRender | decide how your dropdown should render | boolean |
| dropdownText | title of the dropdown | string |
| direction | choose between 'left' or 'right' | string |
| style_override | a Css id for your dropdown component | string |
