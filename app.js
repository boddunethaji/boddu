const app =require("express")();

const PORT= process.env.PORT || 9022;

app.get(" ", (req, res) => {
    res.send( "hello world" );
});
app.listen(PORT, () =>
{
    console.log(`App up at port ${PORT}`);
});