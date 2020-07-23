// Defines what types of data a client can read
// and write to data graph
// Practice schema-first development
// schema is an interface between client and data services
// front-end and back-end collaborate with this structure

// import gql form apollo-server
const { gql } = require("apollo-server");

// the language used to write GraphQL'schema is SDL (schema definition language)
// An exclamation point `!` after a declared field type means value cannot be null
// Declared field type is [Square Brackets], means the of array type

// The type of field type in schema should be either object type or scalar type
// Scalar type resolves to one value (like `ID`, `String`, `Boolean` or `Int`)
const typeDefs = gql`
type Launch {                                           # fetch list of upcoming rocket launches          
    id: ID!                                             # An exclamation point \`!\` after a declared field type means value cannot be null
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
}
type Rocket {
    id: ID!
    name: String
    type: String
}
type User {
    id: ID!
    email: String!
    trips: [Launch]!                                        # Declared field type is [Square Brackets], means the of array type
}
type Mission {
    name: String
    missionPatch(size: PatchSize) : String                 # PatchSize
}                                                          # In this case, the value you provide for size will determine which size of the mission's associated 
enum PatchSize {                                           # patch is returned (the SMALL size or the LARGE size).
    SMALL
    LARGE
}
type Query {                                                # In order to have client way to fetch data, schema needs to define \`Query\` type.
    launches: [Launch]!                                     # launches - return all upcoming \`Launch\`es
    launch(id: ID!): Launch                                 # launch(id: ID!) - return a single \`Launch\` corresponding to query
    me: User                                                # me - Details of the \`User\` currently logged in
}
type Mutation {                                             # Required for the client to make modificiations to the data
    bookTrips(launchIds: [ID]!): TripUpdateResponse!        # Loged-in user can book a trip
    cancelTrip(launch: ID!): TripUpdateResponse!            # Logged-in user can cancel previously booked trip
    login(email:String): String                             # User can login and return login token
}
type TripUpdateResponse {                                   # Mutation return type is recommended not necessary
    success: Boolean!
    message: String
    launches: [Launch]
}
`;

module.exports = typeDefs;
