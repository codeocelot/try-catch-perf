

const trycatch = () => {
  try {
    return 'a';   
  } catch (ex) {
    
  }
}

const notrycatch = () => {
  return 'a';
}

module.exports = {
  trycatch,
  notrycatch
}
