import app from './app.js'

async function main() {
  try {
    //await sequelize.sync({ force: false })
    app.listen(app.get('port'), () => {
      //start sv en el puerto confg
      console.log('server on port: ' + app.get('port'))
      console.log('http://localhost:' + app.get('port'))
    })
  } catch (error) {
    console.error('Unable to connect to the database:')
    console.error(error)
  }
}

main()