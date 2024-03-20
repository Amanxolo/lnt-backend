const { exec } = require('child_process');
// install this package - npm i child_process
const path = require('path')
app.use(bodyParser.json());

app.get('/execute-notebook', (req, res) => {
    const notebookPath1 = path.join(__dirname, 'models', 'Tweets-Scraping-software.ipynb');
    const notebookPath2 = path.join(__dirname, 'models', 'L&T_Sentiment_Analysis_Final.ipynb');
    const finalnotebook = path.join(__dirname, 'models', 'L&T_tweets_final_pred.ipynb');
    // Execute the Jupyter Notebook using nbconvert command
    exec(`jupyter nbconvert --execute "${notebookPath1}" --to notebook --output "${notebookPath1}_executed.ipynb"`, (error, stdout, stderr) => {
        
        // Notebook executed successfully, no output to return
    });
    exec(`jupyter nbconvert --execute "${notebookPath2}" --to notebook --output "${notebookPath2}_executed.ipynb"`, (error, stdout, stderr) => {
        
        // Notebook executed successfully, no output to return
    });
    exec(`jupyter nbconvert --execute "${finalnotebook}" --to notebook --output "${finalnotebook}_executed.ipynb"`, (error, stdout, stderr) => {
        
        // Notebook executed successfully, no output to return
    });

    var hoteljsonFile = require(path.join(__dirname,'models','data.json')); // path of your json file

    res.json(hoteljsonFile);

});
