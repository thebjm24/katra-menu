module.exports = {
  hooks: {
    readPackage(pkg) {
      // Remove sharp from optional dependencies since we use unoptimized images
      if (pkg.optionalDependencies) {
        delete pkg.optionalDependencies.sharp;
      }
      return pkg;
    },
  },
};
