module.exports.schema = ` 
    type Query {
        mahasiswa(id: Int!): Mahasiswa
    },
    type Mutation {
        createMahasiswa(input: MahasiswaInput): Mahasiswa
    },
    input MahasiswaInput {
        id: Int
        nim: String
        nama: String
    },
    type Mahasiswa {
        id: Int
        nim: String
        nama: String
    }
`
