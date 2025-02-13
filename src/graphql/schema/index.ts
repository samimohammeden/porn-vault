import { gql } from "apollo-server-express";

export default gql`
  scalar Long
  scalar Object
  scalar Upload

  type SceneView {
    _id: String!
    scene: Scene
    date: Long!
  }

  type Query {
    getQueueInfo: QueueInfo!
    getWatches(min: Long, max: Long): [SceneView!]!
  }

  type Mutation {
    removeLabel(item: String!, label: String!): Boolean!
  }

  input Crop {
    left: Int!
    top: Int!
    width: Int!
    height: Int!
  }

  type QueueInfo {
    length: Int!
    processing: Boolean!
  }
`;
