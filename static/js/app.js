// GET OPTIONS FROM DATA FOR PULL DOWN MENU
function init() {
    d3.json("samples.json").then(data => {
        var testSubjects = data.names;

        //   // Select form
        var selectTestSubject = d3.select("#selTestSubject");

        // INSERT OPTION INTO PULL DOWN MENU

        // TRY THIS AGAIN WITH A MAP
        testSubjects.map(testSubject => {
            selectTestSubject.append("option").text(testSubject);
            });
        })
    }
// // CREATE EVENT HANDLERS

var selectButton = d3.select("#selTestSubject");
selectButton.on('change', runEnter);

// // FUNCTION FOR EVENT HANDLER
function runEnter() {
    
    var testSubjectInput = selectButton.property("value");
        
    // GET DATA
    d3.json("samples.json").then(data => {
        var testSubjects = data.names;
        var metadata = data.metadata;
        var samples = data.samples;
        sampleIndex = testSubjects.indexOf(testSubjectInput);

        sampleInfo = metadata[sampleIndex];
        sampleData = samples[sampleIndex];

        // DEMOGRAPHIC BOX
        var sampleMetadata = d3.select("#sample-metadata");
        sampleMetadata.html("");

        Object.entries(sampleInfo).forEach(([key, value]) => {
            sampleMetadata.append("p").text(`${key}: ${value}`);
        })
        // CULTURES BAR CHART

        otuIds = sampleData.otu_ids.slice(0,10).reverse()
        otuIdsNames = []
        otuIds.forEach(name => {
            otuIdsNames.push(`OTU ${name}`)
            otuIdsNames.reverse()
        
        sampleValues = sampleData.sample_values
        
        otuLabels = sampleData.otu_labels
        })
        var trace = {
            type: 'bar',
            y: otuIdsNames.slice(0,10).reverse(),
            x: sampleValues.slice(0,10).reverse(),
            orientation : "h"
          };
        
        var data = [trace]

        var layout = {
            title: "Top 10 Bacteria Cultures Found",
            xaxis: { title: "Sample Values" },
            yaxis: { title: "OTU ID",
                 }
          };
          
        
        Plotly.newPlot('bar', data, layout);

        // SCRUB GAUGE
        scrubsPerWeek = sampleInfo.wfreq
        var data = [
            {
                domain: { x: [0, 1], y: [0, 1] },
                gauge: {
                    axis: { range: [null, 9], 
                        tickmode : "linear",
                        tick0  : 1,
                        dtick: 1,
                    },

                    threshold: {
                        line: { color: "red", width: 4 },
                        thickness: 0.75,
                        value: scrubsPerWeek
                      }
                    },
                
                value: scrubsPerWeek,
                title: { text: "Scrubs per Week" },
                type: "indicator",
                mode: "gauge+number"
            }
        ];
        
        // var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
        
        Plotly.newPlot('gauge', data);
        


        //   CULTURES BUBBLE CHART
        var trace1 = {
            x: otuIds,
            y: sampleValues,
            text: otuLabels,
            mode: 'markers',
            marker: {
                color: otuIds,
                size: sampleValues
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: 'Bacteria Cultures per Sample',
            showlegend: false,
            xaxis: { title: "OTI ID" },
            // height: 600,
            // width: 600
          };
          
          Plotly.newPlot('bubble', data, layout);
          
})

}

init()




// Use otu_labels for the text values.