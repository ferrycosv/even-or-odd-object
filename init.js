window.onload = () => {
  //initialize state
  stringSorter.renderActiveList();

  // log initial state
  log.push({
    initialStrings: JSON.parse(JSON.stringify(stringSorter))
  });
};
