module.exports = {
    plugins: [
        ['@semantic-release/commit-analyzer', {
            'preset': 'angular',
            'releaseRules': [
                { type: 'docs', release: 'patch' },
                { type: 'refactor', release: 'patch' },
                { type: 'style', release: 'patch' }
            ]
        }],
        '@semantic-release/release-notes-generator',
        '@semantic-release/changelog',
        ['@semantic-release/npm', {
            'tarballDir': 'release'
        }],
        ['@semantic-release/github', {
            'assets': 'release/*.tgz'
        }],
        ['@semantic-release/git', {
            message: 'chore(release): ${nextRelease.version} [skip ci]'
        }]
    ],
    preset: 'angular'
};
