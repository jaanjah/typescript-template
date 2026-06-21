import config from '@jaanjah/eslint-config';

export default [
  // Generated build output — never lint it.
  { ignores: ['build/'] },
  ...config,
  {
    // Bun's virtual modules (bun:test, bun:sqlite, ...) aren't known to
    // eslint-plugin-import's resolver the way node: builtins are. Mark them
    // resolvable so `import/no-unresolved` doesn't flag them.
    // TODO: upstream this into @jaanjah/eslint-config once it goes Bun-aware.
    settings: {
      'import/core-modules': ['bun', 'bun:test'],
    },
  },
];
