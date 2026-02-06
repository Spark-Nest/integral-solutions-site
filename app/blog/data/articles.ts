export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: "Reliability" | "Integrity" | "Maintenance" | "Engineering";
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  image: string;
  tags: string[];
  featured: boolean;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "5 Strategies to Reduce Repeat Equipment Failures",
    excerpt: "Learn proven methodologies to identify bad actors and implement targeted solutions that cut repeat failures by up to 60%.",
    content: `## The Cost of Repeat Failures

Repeat equipment failures represent one of the most significant drains on maintenance resources in industrial facilities. When the same asset fails repeatedly, it creates a cycle of emergency repairs, production losses, and mounting frustration.

## Strategy 1: Implement a Bad Actor Management Program

**What is a Bad Actor?**
A bad actor is any equipment item that consumes disproportionate maintenance resources relative to its criticality.

**How to Identify Bad Actors:**
1. Gather 12-24 months of work order history
2. Calculate total cost per asset
3. Identify assets with highest failure frequency
4. Plot assets on cost vs. criticality matrix

## Strategy 2: Conduct Rigorous Root Cause Failure Analysis

**Why Standard Troubleshooting Fails**
Traditional troubleshooting often addresses symptoms rather than root causes.

**The 5-Why Method**
Keep asking "why" until you reach a systemic root cause.

## Strategy 3: Optimize Preventive Maintenance

**The PM Optimization Process**
- PM Audit: Review all PMs against actual failure modes
- Frequency Analysis: Use MTBF data
- Task Effectiveness: Verify each task prevents failure

## Strategy 4: Implement Operator-Driven Reliability

**The Power of Operator Engagement**
Equipment operators spend more time with assets than anyone else.

## Strategy 5: Develop Meaningful KPIs

Track these metrics:
- Mean Time Between Failures
- Maintenance cost per asset
- Proactive work percentage
- Equipment availability

## Conclusion

Reducing repeat failures requires a systematic, data-driven approach.`,
    category: "Reliability",
    author: "Marcus Chen",
    authorRole: "Principal Reliability Engineer",
    readTime: "8 min read",
    date: "January 15, 2024",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["RCFA", "Bad Actors", "Preventive Maintenance", "KPIs"],
    featured: true,
  },
  {
    id: 2,
    title: "RBI 101: A Practical Guide to Risk-Based Inspection",
    excerpt: "Understanding RBI implementation for fixed equipment integrity management in oil and gas facilities.",
    content: `## What is Risk-Based Inspection?

Risk-Based Inspection is a systematic approach to developing inspection strategies that focuses resources on equipment with the highest risk.

## Understanding Risk

**Risk = Probability of Failure × Consequence of Failure**

### Probability of Failure Factors:
- Damage Mechanisms
- Equipment Age
- Operating Conditions
- Inspection History

### Consequence of Failure:
- Safety impact
- Environmental consequences
- Economic costs
- Reputation effects

## The RBI Process

### Phase 1: Data Collection
Required data includes equipment specifications, process conditions, material of construction, and operating history.

### Phase 2: Damage Mechanism Identification
Common mechanisms include internal corrosion, external corrosion, and cracking.

### Phase 3: Risk Assessment
Use qualitative, semi-quantitative, or quantitative methods.

### Phase 4: Inspection Planning
Match inspection methods to damage mechanisms.

## Conclusion

RBI reduces costs while improving safety and regulatory compliance.`,
    category: "Integrity",
    author: "Sarah Mitchell",
    authorRole: "Integrity Management Specialist",
    readTime: "12 min read",
    date: "January 10, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["RBI", "API 580", "Inspection Planning", "Compliance"],
    featured: true,
  },
  {
    id: 3,
    title: "The Business Case for RCM in Industrial Facilities",
    excerpt: "How Reliability-Centered Maintenance delivers ROI through optimized maintenance strategies.",
    content: `## What is Reliability-Centered Maintenance?

RCM is a systematic methodology for determining the maintenance requirements of physical assets in operating context.

## The Business Case

**Case Study Results:**
- 26% reduction in maintenance costs
- 59% fewer emergency work orders
- 97% equipment availability
- 3-year ROI: 387%

## The RCM Process

### Phase 1: System Selection
Choose critical systems with known reliability issues.

### Phase 2: Functional Analysis
Define functions and performance standards.

### Phase 3: Failure Mode Analysis
Identify functional failures and their effects.

### Phase 4: Task Selection
Use the RCM decision diagram to select appropriate tasks.

## Conclusion

RCM typically delivers 20-40% maintenance cost reductions while improving equipment performance.`,
    category: "Maintenance",
    author: "David Park",
    authorRole: "Maintenance Strategy Consultant",
    readTime: "10 min read",
    date: "January 5, 2024",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    tags: ["RCM", "ROI", "Maintenance Strategy", "Optimization"],
    featured: true,
  },
  {
    id: 4,
    title: "Vibration Analysis: Early Warning System for Rotating Equipment",
    excerpt: "Leveraging vibration monitoring to predict failures before they happen.",
    content: `## The Power of Vibration Analysis

Vibration analysis is one of the most powerful predictive maintenance tools available for rotating equipment.

## Types of Vibration Measurements

### Overall Vibration
Total vibration energy across all frequencies. Good for trend monitoring.

### Spectral Analysis
Vibration amplitude at specific frequencies. Essential for fault diagnosis.

### Time Waveform
Shows actual vibration pattern. Useful for detecting impacts.

## Common Faults Detected

### Unbalance
- Dominant 1× RPM frequency
- High radial vibration

### Misalignment
- Strong 2× RPM frequency
- High axial vibration

### Bearing Defects
- Specific bearing frequencies
- Increasing amplitude over time

## Conclusion

Vibration analysis typically pays for itself in 6-18 months through avoided failures.`,
    category: "Reliability",
    author: "Jennifer Walsh",
    authorRole: "Condition Monitoring Specialist",
    readTime: "7 min read",
    date: "December 28, 2023",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
    tags: ["Vibration Analysis", "Predictive Maintenance", "Condition Monitoring"],
    featured: false,
  },
  {
    id: 5,
    title: "Fitness for Service Assessments: When to Repair vs. Replace",
    excerpt: "Making informed decisions about equipment life extension using API 579 standards.",
    content: `## What is Fitness for Service?

FFS is an engineering evaluation of in-service equipment to determine if it is suitable for continued operation.

## When is FFS Assessment Needed?

- Inspection finds damage
- Equipment exceeded design life
- Operating conditions changed
- Prior to major repair decisions

## The FFS Process

### Level 1: Screening
Quick evaluation using conservative assumptions.

### Level 2: Standard
Detailed evaluation using actual operating conditions.

### Level 3: Advanced
Complex cases requiring finite element analysis.

## Remaining Life Determination

Calculate based on corrosion rates and minimum required thickness.

## Conclusion

FFS assessments provide the engineering basis for confident decisions about aging equipment.`,
    category: "Integrity",
    author: "Michael Torres",
    authorRole: "Principal Integrity Engineer",
    readTime: "9 min read",
    date: "December 20, 2023",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=800&q=80",
    tags: ["FFS", "API 579", "Life Extension", "Damage Mechanisms"],
    featured: false,
  },
  {
    id: 6,
    title: "Building a Culture of Operator-Driven Reliability",
    excerpt: "How to engage operations teams in reliability initiatives.",
    content: `## The Untapped Resource

Equipment operators are the most underutilized resource in most reliability programs.

## What is Operator-Driven Reliability?

ODR engages operations personnel in equipment reliability through daily care, inspection, and early problem detection.

## Building Your ODR Program

### Phase 1: Foundation
Secure leadership commitment and define scope.

### Phase 2: Training
Core curriculum includes reliability basics, equipment knowledge, and inspection techniques.

### Phase 3: Implementation
Daily activities include equipment checks, monitoring, and documentation.

## Measuring Success

Typical results include 30-50% reduction in minor stops and 40% of failures detected by operators.

## Conclusion

ODR transforms the relationship between operations and maintenance.`,
    category: "Reliability",
    author: "Lisa Anderson",
    authorRole: "Reliability Program Manager",
    readTime: "6 min read",
    date: "December 15, 2023",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    tags: ["ODR", "Operator Training", "Work Culture", "Reliability"],
    featured: false,
  },
  {
    id: 7,
    title: "Corrosion Management in Sour Gas Environments",
    excerpt: "Best practices for managing corrosion in H2S-containing environments.",
    content: `## Understanding Sour Gas Corrosion

Hydrogen sulfide (H2S) presents unique challenges for materials in oil and gas production.

## Key Corrosion Mechanisms

### Sulfide Stress Cracking
Brittle fracture of susceptible materials under tensile stress.

### Hydrogen-Induced Cracking
Internal cracking caused by hydrogen diffusion.

### Stress-Oriented HIC
Combination of HIC and SSC oriented perpendicular to stress.

## Materials Selection

- Carbon steels with hardness control
- HIC-resistant steels
- Corrosion-resistant alloys

## Conclusion

Managing H2S corrosion requires comprehensive materials selection, monitoring, and management practices.`,
    category: "Integrity",
    author: "Dr. Rachel Kim",
    authorRole: "Materials & Corrosion Engineer",
    readTime: "11 min read",
    date: "December 10, 2023",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    tags: ["Corrosion", "Sour Gas", "Materials", "NACE"],
    featured: false,
  },
  {
    id: 8,
    title: "Turnaround Planning: Critical Success Factors",
    excerpt: "Key elements for executing successful plant shutdowns and turnarounds.",
    content: `## The High-Stakes World of Turnarounds

Plant turnarounds represent some of the most complex and high-risk activities in industrial operations.

## Critical Success Factors

### 1. Scope Management
Establish scope freeze date and challenge every work item.

### 2. Schedule Development
Identify true critical path and build logic-driven schedules.

### 3. Resource Management
Plan accurate headcount by craft for peak demands.

### 4. Contractor Management
Pre-qualify contractors and actively manage performance.

### 5. Safety Management
Manage simultaneous operations and enhanced risks.

## Conclusion

Successful turnarounds result from disciplined planning and execution.`,
    category: "Engineering",
    author: "Robert Chen",
    authorRole: "Turnaround Project Manager",
    readTime: "8 min read",
    date: "December 5, 2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    tags: ["Turnaround", "Project Management", "Planning", "Shutdown"],
    featured: false,
  },
];

export const categories = ["All", "Reliability", "Integrity", "Maintenance", "Engineering"] as const;

export type Category = typeof categories[number];
