{
  // 
  // ::::::: 1-10 Union and Intersection types :::::::
  // In JavaScript || refers to OR
  // In TypeScript | refers to Union
  // In JavaScript && refers to AND
  // In TypeScript & refers to Intersection

  // Union Type
  type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper';
  type FullstackDeveloper = 'frontendDeveloper' | 'backendDeveloper';
  type Developer = FrontendDeveloper | FullstackDeveloper;

  const frontendDeveloper : FrontendDeveloper = 'juniorDeveloper';
  const fullstackDeveloper: FullstackDeveloper = 'frontendDeveloper';
  const developer: Developer = 'backendDeveloper';

  type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: 'A+'|'B+'|'O+'|'AB+'
  }
  const user1: User = {
    name: 'Manik',
    gender: 'male',
    bloodGroup:'AB+'
  }

  // Intersection type
  type FrontDeskBanker = {
    skills: string[];
    designation1: 'Accounts Opening Officer'
  }

  type InvestmentBanker = {
    skills: string[];
    designation2: 'Investment Officer'
  }

  type ExpertBanker = FrontDeskBanker & InvestmentBanker;

  const expertBanker: ExpertBanker ={
    skills: ['Accounts opening', 'Accounts closing', 'BFTN', 'Investment Proposal'],
    designation1: 'Accounts Opening Officer',
    designation2: 'Investment Officer'
  }













  // 
}