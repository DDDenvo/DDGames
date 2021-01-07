const CreateJob = ({
    index,
    name,
}) => {
    return ({
        Id: index,
        Name: name,
    })
}

const Jobs = [
    CreateJob({ index: 1, name: "村人" }),
]

export default (Jobs);