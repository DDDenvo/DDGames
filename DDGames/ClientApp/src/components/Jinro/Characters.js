const CreateCharacter = ({
    id,
    name,
    param01 = 5,
    param02 = 5,
}) => {
    return ({
        ID: id,
        Name: name,
        Param01: param01,
        Param02: param02,
    });
};

const Characters = [
    CreateCharacter({ id: "sq", name: "SQ" }),
    CreateCharacter({ id: "zina", name: "ジナ" }),
]

export default Characters;