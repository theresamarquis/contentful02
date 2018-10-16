import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';


const pageTemplate = (props)=>{
    const page = get(props, 'data.contentfulPage');

    return(
       
        <div style={{ background: '#fff' }}>   
            <h1>{page.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: page.contentBody.childMarkdownRemark.html }} />  
        </div>
            
    )
}



export default pageTemplate;

export const pageQuery = graphql`
    query PageBySlug($slug: String!) {
        contentfulPage(slug: { eq: $slug }) {
            title
            contentBody {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`;