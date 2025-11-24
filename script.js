//your JS code here. If required.
 const bands = [
      'The Plot in You',
      'The Devil Wears Prada',
      'Pierce the Veil',
      'Norma Jean',
      'The Bled',
      'Say Anything',
      'The Midway State',
      'We Came as Romans',
      'Counterparts',
      'Oh, Sleeper',
      'A Skylit Drive',
      'Anywhere But Here',
      'An Old Dog'
    ];

    // Remove leading 'a ', 'an ', 'the ' (case-insensitive) for sorting purposes
    function sortKey(str) {
      return str.replace(/^\s*(?:a|an|the)\s+/i, "").trim().toLowerCase();
    }

    // Stable sort by key; if keys equal keep original order using index
    const withIndex = bands.map((name, idx) => ({ name, idx, key: sortKey(name) }));

    withIndex.sort((a, b) => {
      const cmp = a.key.localeCompare(b.key, undefined, { numeric: false, sensitivity: 'base' });
      return cmp !== 0 ? cmp : a.idx - b.idx;
    });

    const sorted = withIndex.map(x => x.name);

    // Render into the ul with id 'band'
    const ul = document.getElementById('band');
    sorted.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });