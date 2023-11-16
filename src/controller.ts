import { gql,GraphQLClient } from 'graphql-request'

interface PinnedRepos {
    viewer: {
      pinnedItems: {
        nodes: {
          name: string;
          description: string;
          url: string;
          homepageUrl: string;
          languages: {
            nodes: {
              name: string;
              color: string;
            }[];
          };
        }[];
      };
    };
}

export const getPinnedRepos = async () => {
  const endpoint = 'https://api.github.com/graphql'
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  })

  const query = gql`
    query {
      viewer {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              homepageUrl
              languages(first: 1) {
                nodes {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  `;

  try {
    const data = await graphQLClient.request<PinnedRepos>(query);
    return data.viewer.pinnedItems.nodes;
  } catch (error) {
    console.error(error);
    return [];
  }
}
