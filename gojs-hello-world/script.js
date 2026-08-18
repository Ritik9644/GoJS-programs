const diagram = new go.Diagram("myDiagramDiv");

const node = new go.Node("Auto")
    .add( new go.Shape("RoundedRectangle", {
      fill: '#bbcfcc', 
      stroke: '#4b5957',
      strokeWidth: 3.5
    }),
    
    new go.TextBlock("hello world",{
        margin: 8
    })
    );
diagram.add(node);