/**
 * Contains the miscellaneous route handlers.
 * @author Adham Khaled <https://github.com/AdhamKhaledDev>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
