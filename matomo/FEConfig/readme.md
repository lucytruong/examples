Last upated: 22-10-2025
## About loading main config script FE

### Summary
Occasionally the business might need the main config script to be loaded in the front end outside of any Tag manager solution.
This soluttion shows a js example (which is currently live on one of my clients site) of Matomo main config script being loaded in the FE but using GTM to execute it so GTM can still turn off the script without actual site configuration.

## Benefits of this solution
For tags that still need to load client side this solution offers:
* The ability to have a solution that has a Tagmanager dependent implementation,
* The ability to also use a shortform version of the tag to load where GTM is being blocked
    * Being able to also have a shortern tag that still files without GTM (or any tag manager) enables the business to identify and measure the impact of missing tag managers.


## This solution could be applied to any tags that need to executed front end.
For access to the solution and see the code working please contact me for a demo.
### Lucy Truong: Hoaanhl@hotmail.com