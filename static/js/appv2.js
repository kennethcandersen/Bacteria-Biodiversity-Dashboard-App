// GET OPTIONS FROM DATA FOR PULL DOWN MENU
function init() {
    d3.json("samples.json").then(data => {
        var testSubjects = data.names;

        //   // Select form
        var selectTestSubject = d3.select("#selTestSubject");

        // Insert option into pull down menu
        testSubjects.map(testSubject => {
            selectTestSubject.append("option").text(testSubject);
            });
        })
    runEnter()
    }
// // CREATE EVENT HANDLERS

var selectButton = d3.select("#selTestSubject");
selectButton.on('change', runEnter);

// // FUNCTION FOR EVENT HANDLER
function runEnter() {
    
    var testSubjectSelected = parseInt(selectButton.property("value"));

    // GET DATA
    d3.json("samples.json").then(data => {
        var testSubjectDemographics = data.metadata.find(testSubject =>
            testSubject.id === testSubjectSelected);
       
    
        // LOOK UP .FIND FUNCTION FOR JAVASCRIPT
        var testSubjectData = data.samples.find(testSubject => 
            testSubject.id == testSubjectSelected
            );

        // DEMOGRAPHIC BOX
        var sampleMetadata = d3.select("#sample-metadata");
       // SELECT THE 'PS' AND DELETE THEM (.DELETE???)
        sampleMetadata.html("");

        Object.entries(testSubjectDemographics).map(([key, value]) => {
            sampleMetadata.append("p").text(`${key}: ${value}`);
        })
        // SET UP ARRAYS TO PLOT
        
        var otuIds = testSubjectData.otu_ids;

        
        var otuIdsNames = [];
        otuIds.map(name => {
            otuIdsNames.push(`OTU ${name}`);
            otuIdsNames.reverse();
        });

        var sampleValues = testSubjectData.sample_values;

        otuLabels = testSubjectData.otu_labels;

        // BAR CHART
        var otuIdsNamesSliced = otuIdsNames.slice(0,10).reverse();
        var sampleValuesSliced = sampleValues.slice(0,10).reverse();

        var trace = {
            type: 'bar',
            y: otuIdsNamesSliced,
            x: sampleValuesSliced,
            text: otuLabels,
            orientation : "h"
          };
        
        var data = [trace]

        var layout = {
            title: {text: "Top 10 Bacteria Cultures Found",
            font: {size: 20,
                family: "Arial Black"},
            y : .85
              },
            xaxis: { title: "Sample Values", 
                automargin: true, },
            yaxis: { title: "OTU ID"},
            margin: { l: 100, r: 10, t: 100, b: 50 }
                 
          };
          
        
        Plotly.newPlot('bar', data, layout);

        // SCRUB GAUGE
        scrubsPerWeek = testSubjectDemographics.wfreq

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
                text: ['TEST'],
                textposition: 'top',
                value: scrubsPerWeek,
                title: { text: "Bacteria Scrubs per Week" ,
                font: {size: 20,
                    family: "Arial Black"}
                  },
                type: "indicator",
                mode: "gauge+number"
            }
        ];

        var layout = {margin: { l: 20, r: 20, t: 20, b: 20 } };

        Plotly.newPlot('gauge', data, layout);

        


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
            title: {text: 'Bacteria Cultures per Sample',
            font: {size: 20,
                family: "Arial Black"},
            y : .85
                },
            showlegend: false,
            xaxis: { title: "OTI ID" },

          };
          
        Plotly.newPlot('bubble', data, layout);
        
        });
}

init()
