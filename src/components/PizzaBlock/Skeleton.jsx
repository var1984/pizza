import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="138" cy="111" r="109" /> 
    <rect x="0" y="235" rx="9" ry="9" width="280" height="25" /> 
    <rect x="120" y="323" rx="0" ry="0" width="2" height="0" /> 
    <rect x="0" y="280" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="389" rx="10" ry="10" width="95" height="30" /> 
    <rect x="115" y="389" rx="0" ry="0" width="147" height="31" />
  </ContentLoader>
)

export default Skeleton