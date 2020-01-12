export default function() {
  const count = arguments[0] || 1,
    objects = [];
  let i = 0;

    for (; i < count; i++) {
      objects.push({
        name: randomName(),
        age: randomAge(),
        education: {
          primary: randomName(),
          secondary: randomName()
        },
        skills: randomSkills()
      });
    }

    return count === 1 ? objects[0] : objects;
};

function randomName() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    charsLength = chars.length,
    len = Math.floor(Math.random(Date.now()) * 15) + 3;
  let i = 0, result = '';

  for (; i < len; i++) {
    result += chars[Math.floor(Math.random(Date.now()) * charsLength)];
  }

  return result;
}

function randomAge() {
  return Math.floor(Math.random(Date.now()) * 99) + 5;
}

function randomSkills() {
  const skills = [
    'js',
    'css',
    'html',
    'reactjs',
    'angularjs',
    'emberjs',
    'vue'
  ],
    len = Math.floor(Math.random(Date.now()) * skills.length - 1);

  return skills.slice(len);
}
