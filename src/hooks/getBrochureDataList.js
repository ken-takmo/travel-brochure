const getBrochureDataList = (docs) => {
  const result = [];
  docs.forEach((doc) => {
    result.push({
      tripId: doc.id,
      ...doc.data(),
    });
  });
  return result;
};

export { getBrochureDataList };
