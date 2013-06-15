fragment = document.createDocumentFragment();

getIndices = (classArray) ->
  xy = { x: -1, y: -1 }
  $(classArray).each (e) ->
    # get the column
    colindex = classArray[e].split(/col/)
    if (colindex.length > 1)
      xy.x = colindex[1]
    #get the row
    rowindex = classArray[e].split(/row/)
    if (rowindex.length > 1)
      xy.y = rowindex[1]
  # object contains x,y
  xy

hexclick = (e) ->
  # find out on what element was clicked
  classes = e.target.className.split(/\s+/);  
  xy = getIndices(classes)
  console.log(board[xy.x][xy.y])
  $(e.target).toggleClass('beard')
