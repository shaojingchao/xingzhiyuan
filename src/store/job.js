const salaryTrends = {
  "salary_years": [{"years": "0", "salary": "3147"}, {
    "years": "2",
    "salary": "4200"
  }, {"years": "4", "salary": "5140"}, {"years": "6", "salary": "5859"}, {
    "years": "8",
    "salary": "6383"
  }, {"years": "10", "salary": "6624"}],
  "salary_general": [{"years": "0", "salary": "3733"}, {"years": "2", "salary": "4988"}, {
    "years": "4",
    "salary": "6087"
  }, {"years": "6", "salary": "7087"}, {"years": "8", "salary": "7872"}, {"years": "10", "salary": "8137"}]
}

const job = {
  namespaced: true,
  state: {
    salaryTrends
  }
}

export default job
