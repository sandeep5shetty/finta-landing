import React from 'react';
import { BrainIcon } from './Icons';

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
            Hey
          </CardSkeleton>
        </BentoCard>

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
            className={'flex items-center justify-center bg-red-200 text-4xl'}
          >
            Hey
          </CardSkeleton>
        </BentoCard>

        <BentoCard className="col-span-1 lg:col-span-2">
          <CardHeader>
            <BrainIcon className="mt-1 size-6" />
            <CardTitle>LLM Model Selector</CardTitle>
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
      className={`card-skeleton mt-4 h-30 w-full rounded-md bg-emerald-200/70 ${className}`}
    >
      {children}
    </div>
  );
};

export default BentoSection;
