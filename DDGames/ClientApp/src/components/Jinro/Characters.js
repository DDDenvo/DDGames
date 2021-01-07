const CreateCharacter = ({
    id,
    name,
}) => {
    return ({
        ID: id,
        Name: name
    });
};

const Characters = [
    CreateCharacter({ id: "sq", name: "SQ" }),
    CreateCharacter({ id: "zina", name: "ジナ" }),
]

export default Characters;