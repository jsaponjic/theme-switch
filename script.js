const setTheme = (theme) => {
  document.firstElementChild.setAttribute('theme', theme);
};

const getTheme = () => {
  return document.firstElementChild.getAttribute('theme');
};

window.onload = () => {
  const outer = document.querySelector('.outer');
  const sphere = document.querySelector('.sphere');

  const themeSwitcher = document.querySelector('.theme-switch');

  const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');

  const moveSphere = () => {
    sphere.classList.remove('sphere-right');

    if (getTheme() === 'dark') {
      sphere.classList.add('darkening');
      sphere.classList.remove('dawning');
    } else {
      sphere.classList.add('dawning');
      sphere.classList.remove('darkening');
    }
  };

  if (!storedTheme) {
    const theme = isDarkTheme ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
  }

  if (storedTheme) {
    if (storedTheme === 'dark') {
      setTheme('dark');
    }
    if (storedTheme === 'light') {
      setTheme('light');
    }
  } else {
    if (isDarkTheme) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  if (getTheme() === 'dark') {
    sphere.classList.add('sphere-right');
  }

  themeSwitcher.addEventListener('click', () => {
    const toggledTheme =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', toggledTheme);

    setTheme(toggledTheme);
    moveSphere();
  });

  outer.addEventListener('click', () => {
    const toggledTheme =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', toggledTheme);

    setTheme(toggledTheme);

    moveSphere();
  });
};
