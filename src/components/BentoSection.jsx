import React from 'react';
import { BrainIcon, MouseBoxIcon, OpenAILogo, WindowIcon } from './Icons';

const BentoSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 border-y border-neutral-300/50 lg:grid-cols-2">
        <BentoCard>
          <CardHeader>
            <BrainIcon className="mt-1 size-6" />
            <CardTitle>LLM Model Selector</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton
            className={'flex items-center justify-center bg-blue-200 text-4xl'}
          >
            <ModelsContainer>
              <OpenAIComponent>
                <OpenAIText>
                  <PoweredBy>
                    <OpenAILogo className="size-6" />
                    <span className="text-sm">OpenAI</span>
                  </PoweredBy>
                  <ModelName>GPT 5</ModelName>
                </OpenAIText>
                <OpenAiBtn> </OpenAiBtn>
              </OpenAIComponent>
              <ModelCard>
                <TopSection>
                  <div className="size-4 rounded-full bg-red-600"></div>
                  <div className="size-4 rounded-full bg-yellow-500"></div>
                  <div className="size-4 rounded-full bg-green-600"></div>
                </TopSection>
                <BottomSection>
                  <AllModels>
                    <WindowIcon className="size-6" />
                  </AllModels>
                </BottomSection>
              </ModelCard>
            </ModelsContainer>
          </CardSkeleton>
        </BentoCard>

        <BentoCard>
          <CardHeader>
            <MouseBoxIcon className="mt-1 size-6" />
            <CardTitle>Text to workflow builder</CardTitle>
          </CardHeader>
          <CardDescription>
            Preview and debug workflow logic in a safe sandbox before deploying,
            helping you iterate with confidence.
          </CardDescription>
          <CardSkeleton
            className={'flex items-center justify-center bg-red-200 text-4xl'}
          >
            Hey
          </CardSkeleton>
        </BentoCard>

        <BentoCard className="col-span-1 lg:col-span-2">
          <CardHeader>
            <BrainIcon className="mt-1 size-6" />
            <CardTitle>Native Tools Integrationr</CardTitle>
          </CardHeader>
          <CardDescription>
            Track real-time activity of agents with detailed records of
            triggers, tools used, outcomes, and timestamps.
          </CardDescription>
          <CardSkeleton
            className={
              'flex items-center justify-center bg-orange-200 text-4xl'
            }
          >
            Hey
          </CardSkeleton>
        </BentoCard>
      </div>
    </div>
  );
};

const BentoCard = ({ children, className }) => {
  return (
    <div className={`bento-card bg-gray-300/20 p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardTitle = ({ children }) => {
  return <h3 className="card-title">{children}</h3>;
};
const CardDescription = ({ children }) => {
  return (
    <p className="card-description flex justify-start text-gray-500">
      {children}
    </p>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="card-header mb-4 flex items-center gap-2 text-xl">
      {children}
    </div>
  );
};

const CardSkeleton = ({ children, className }) => {
  return (
    <div
      className={`card-skeleton mt-4 h-100 w-full rounded-md bg-gray-300/20 ${className}`}
    >
      {children}
    </div>
  );
};

const ModelsContainer = ({ children }) => {
  return (
    <div className="models-container relative mt-18 size-[70%] rounded-2xl bg-gray-200 shadow-lg">
      {children}
    </div>
  );
};

const ModelCard = ({ children }) => {
  return <div className="model-card relative">{children}</div>;
};

const TopSection = ({ children }) => {
  return (
    <div className="top-section absolute top-8 left-4 flex gap-2">
      {children}
    </div>
  );
};

const BottomSection = () => {
  return <div className="bottom-section"></div>;
};

const OpenAIComponent = ({ children }) => {
  return (
    <div className="openai-component absolute -top-12 -right-12 w-[65%] rounded-xl bg-gray-200 shadow-md">
      {children}
    </div>
  );
};

const OpenAIText = ({ children }) => {
  return (
    <div className="openai-text flex items-center justify-between border-b border-gray-300 px-2 py-2">
      {children}
    </div>
  );
};

const OpenAiBtn = () => {
  return (
    <button className="openai-btn text-xstext-white m-2 mb-3 flex items-center gap-2 overflow-visible rounded-md border border-[#2b7fff] bg-sky-200/60 px-3 tracking-normal text-[#2b7fff]">
      <span className="text-lg">Connected</span>
    </button>
  );
};

const PoweredBy = ({ children }) => {
  return <div className="powered-by flex items-center gap-2">{children}</div>;
};

const ModelName = ({ children }) => {
  return (
    <div className="model-name text-sm font-semibold tracking-wider text-neutral-600">
      {children}
    </div>
  );
};

const AllModels = ({ children }) => {
  return <div className="all-models flex items-center gap-2">{children}</div>;
};

export default BentoSection;
