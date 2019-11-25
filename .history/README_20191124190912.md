# Online Spreadsheet

The goal of this problem is to create a simple online spreadsheet app that is
capable of loading and saving its data. Your app should consist, at a minimum,
of a table of editable cells and a form allowing the user to load and save data.

To evaluate your submission, we will include a javascript test harness in your
HTML file that implements two functions: `load_data(key)`, which takes a data key
and returns a JSON representation of the data to be loaded into the table, and
`save_data(key, data)`, which takes a key and a JSON representation of the data
currently in the table. Both the data key and the JSON representation are
expected to be strings. Your form should consist of a text input field for the
data key and load and save buttons. When the load button is clicked, you should
call the `load_data()` function and populate the cells accordingly. When the save
button is clicked, you should call the `save_data()` function with the data key
and the data in the table.

The JSON data format is simply a two-dimensional array containing the values
to be loaded in each cell. For example, the following JSON string:

`'[[1], [2, 3], [4, 5, 6], [], [7, 8, 9, 0]]'`

would represent the following table:

```
   +-----+-----+-----+-----+-----+
   |  1  |     |     |     |     |
   +-----+-----+-----+-----+-----+
   |  2  |  3  |     |     |     |
   +-----+-----+-----+-----+-----+
   |  4  |  5  |  6  |     |     |
   +-----+-----+-----+-----+-----+
   |     |     |     |     |     |
   +-----+-----+-----+-----+-----+
   |  7  |  8  |  9  |  0  |     |
   +-----+-----+-----+-----+-----+
   |     |     |     |     |     |
   +-----+-----+-----+-----+-----+
```

Your spreadsheet should support a minimum of 8 rows and 8 columns.

# Extra Credit

If you have extra time, you can attempt to implement the following features:

- Arrow-key navigation between cells

- Multi-cell mouse selection and clearing with delete key

  - Clicking a cell and dragging the mouse should select all cells within
    the box defined by the start and end points; pressing the delete key
    should clear the data in the selected cells.

- Formula cells
  - Similar to Excel: if you enter `=A1+B2*4` it should fill in the cell with
    the computed value.

# Submission Instructions

- You may make use of the jquery base library, but all other html/css/js must
  be written by you during the test period.

- Submit your solution as a pull request with the html/css/js/img files required
  for your app. We will manually edit the html to include the javascript
  test harness and open it locally in a browser to evaluate it.

- We evaluate your solution as intended users of the spreadsheet app as well
  as developers, looking for code organization and readability.
