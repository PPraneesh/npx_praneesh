import chalk from "chalk";
import terminalLink from "terminal-link";

const printer = () =>{
    console.log(chalk.blue(`    
                    ██████╗ ██████╗  █████╗ ███╗   ██╗███████╗███████╗███████╗██╗  ██╗
                    ██╔══██╗██╔══██╗██╔══██╗████╗  ██║██╔════╝██╔════╝██╔════╝██║  ██║
                    ██████╔╝██████╔╝███████║██╔██╗ ██║█████╗  █████╗  ███████╗███████║
                    ██╔═══╝ ██╔══██╗██╔══██║██║╚██╗██║██╔══╝  ██╔══╝  ╚════██║██╔══██║
                    ██║     ██║  ██║██║  ██║██║ ╚████║███████╗███████╗███████║██║  ██║
                    ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═╝        
`));
    console.log(terminalLink("Visit my website", "https://parshipraneesh.me"));
}
printer()