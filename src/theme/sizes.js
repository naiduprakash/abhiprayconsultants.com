function getColumnSizes(totalColumns) {
  let totalWidth = 100;
  let singleColumnWidth = totalWidth / totalColumns;
  let sizes = {};
  Array.from({ length: totalColumns })
    .map((_, i) => i + 1)
    .forEach((number) => {
      sizes[`col-${number}`] = `${singleColumnWidth * number}%`;
    });

  sizes['col'] = '100%';
  return sizes;
}

const columnSizes = getColumnSizes(12);

export default columnSizes;
