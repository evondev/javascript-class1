// 1. api = Application Programming Interface
{
  const endpoint = `https://api.github.com/users/evondev`;
  async function getGithubUserInfo() {
    try {
      const response = await fetch(endpoint);
      response.json().then((value) => {
        console.log(value);
        return value;
      });
    } catch (error) {
      if (error) {
        console.log("It seems your api was wrong!");
      }
    }
  }
  getGithubUserInfo();
}
