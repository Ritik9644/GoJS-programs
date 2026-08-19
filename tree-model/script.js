const diagram = new go.Diagram("myDiagramDiv",{
    layout: new go.TreeLayout()
});

diagram.nodeTemplate = new go.Node("Auto")
    .add(
        new go.Shape("RoundedRectangle",{
            fill: "lightblue"
        }),

        new go.TextBlock("hello world",{
            margin: 8
        })
        .bind("text","name")
    );


const nodeDataArray = [
    {key: 1, name: "manager"},
    {key: 2, name: "developer"},
    {key: 3, name: "designer"}
];

const linkDataArray = [
    {from: 1, to: 2},
    {from: 1, to: 3}
];


diagram.model = new go.GraphLinksModel(
    nodeDataArray,
    linkDataArray
);