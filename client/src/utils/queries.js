import { gql } from '@apollo/client';

export const GET_ME = gql`
  query Query {
    me {
    _id
    email
    name
    savedChildren {
      _id
      entries {
        ChildId
        _id
        mood
        responseOne
      }
      name
      theme
      badges
    }
  }
}
`;