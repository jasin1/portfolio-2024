function headingBlock({level= "h2", headingText}){
  const HeadingTag = `h${level}`;
  return<HeadingTag>{headingText}</HeadingTag>

}

export default headingBlock;