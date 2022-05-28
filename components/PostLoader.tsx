import React from "react"
import ContentLoader from "react-content-loader"

const PostLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    viewBox="0 0 450 350"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="57" cy="34" r="18" /> 
    <rect x="83" y="23" rx="2" ry="2" width="140" height="10" /> 
    <rect x="40" y="60" rx="2" ry="2" width="140" height="10" /> 
    <rect x="40" y="80" rx="2" ry="2" width="250" height="6" /> 
    <rect x="40" y="95" rx="2" ry="2" width="250" height="6" /> 
    <rect x="40" y="110" rx="2" ry="2" width="100" height="6" />
    <rect x="40" y="125" rx="2" ry="2" width="380" height="210" /> 
  </ContentLoader>
)

export default PostLoader