// // Root Query

// module.exports = {
//   Query: {
//     launches: {
//       type: new GraphQLList(LaunchType),
//       resolve(parent, args) {
//         return axios
//           .get("https://api.spacexdata.com/v4/launches")
//           .then((res) => res.data);
//       },
//     },
//     launch: {
//       type: LaunchType,
//       args: {
//         flight_number: { type: GraphQLInt },
//       },
//       resolve(parent, args) {
//         return axios
//           .get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
//           .then((res) => res.data);
//       },
//     },
//     rockets: {
//       type: new GraphQLList(RocketType),
//       resolve(parent, args) {
//         return axios
//           .get("https://api.spacexdata.com/v4/rockets")
//           .then((res) => res.data);
//       },
//     },
//     rocket: {
//       type: RocketType,
//       args: {
//         id: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         return axios
//           .get(`https://api.spacexdata.com/v4/rockets/${args.id}`)
//           .then((res) => res.data);
//       },
//     },
//   },
// };
