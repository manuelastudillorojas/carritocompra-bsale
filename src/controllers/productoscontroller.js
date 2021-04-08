const controller = {};

controller.lis = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT id,name,url_image,price,discount,category FROM product order by category desc', (err, productos) => {
            if (err) {
                res.json(err);
            }
            conn.query('SELECT id,name FROM category order by name desc', (err, category) => {
                if (err) {
                    res.json(err);
                }

                res.render('home', {
                    data: productos,
                    category: category
                });
            });

        });
    })
};

module.exports = controller;