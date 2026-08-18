const diagram = new go.Diagram("myDiagramDiv");

diagram.nodeTemplate = new go.Node("Auto")
    .add( new go.Shape("RoundedRectangle", {
      fill: '#bbcfcc', 
      stroke: '#4b5957',
      strokeWidth: 3.5
    })
    .bind("fill", "color"),

    new go.Panel("Vertical",{
        margin: 8
    })
    
    .add(new go.TextBlock("hello world",{
        font: "bold 14px Arial",
        margin: 4
    })
    .bind("text", "name")
    )
    );

    diagram.model = new go.GraphLinksModel(
        [
            { key: 1, name: "ritik", role: "developer", color: "#bbcfcc"},
            { key: 2, name: "gojs", role: "library", color: "#d5e8d4"}

        ],
        [
            {from: 1, to: 2}
        ]
    );