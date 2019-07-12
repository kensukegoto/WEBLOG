const presets = [
  [
    "@babel/env", 
    {
      "targets": [">0.25% in JP", "not ie <= 10", "not op_mini all"],
      "useBuiltIns": "usage",
      "corejs": 3
    }
  ]
];



module.exports = { presets };