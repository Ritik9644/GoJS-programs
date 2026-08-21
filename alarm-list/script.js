fetch("/alarm_list.json")
    .then(response => response.json())
    .then(config =>{

        const list = config.nodeDataArray[0];

        const columnDefs = list.properties.Columns.map(c =>({
            field: c.columnName,
            headerName: c.displayName
        }));

        fetch("/api/alarms")
            .then(response => response.json())
            .then(rows =>{

                agGrid.createGrid(document.getElementById("grid"),{
                    columnDefs,
                    rowData:rows
                });

            });
    });