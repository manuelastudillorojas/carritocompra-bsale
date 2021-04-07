const controller = {};

controller.lis = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT id,name,url_image,price,discount,category FROM product order by category desc', (err, productos) => {
            if (err) {
                res.json(err);
            }

            res.render('home', {
                data: productos
            });
        });
    })
};

module.exports = controller;