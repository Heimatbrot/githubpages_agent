import Link from "next/link";

export default function Setup() {
  return (
    <div className="min-h-screen bg-green-50">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/" className="text-green-600 hover:text-green-800 flex items-center gap-2 mb-4">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold text-green-900 mb-6">OpenHands Setup Guide</h1>
            <p className="text-xl text-green-700">
              Learn how to set up OpenHands for automated GitHub issue processing, coding, testing, and deployment.
            </p>
          </div>

          {/* Prerequisites */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Prerequisites</h2>
            <ul className="space-y-2 text-green-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Python 3.8 or higher installed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Docker installed and running
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                Git configured with your credentials
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                GitHub account with repository access
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                OpenAI account for API access
              </li>
            </ul>
          </div>

          {/* Step 1: Install OpenHands */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Step 1: Install OpenHands</h2>
            <p className="text-green-700 mb-4">
              Install OpenHands using pip or from source:
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">
                # Install from PyPI<br/>
                pip install openhands-ai<br/><br/>
                # Or install from source<br/>
                git clone https://github.com/All-Hands-AI/OpenHands.git<br/>
                cd OpenHands<br/>
                pip install -e .
              </code>
            </div>

            <p className="text-green-700">
              Alternatively, you can use the web interface at{" "}
              <a href="https://app.all-hands.dev" className="text-green-600 hover:text-green-800 underline">
                app.all-hands.dev
              </a>
            </p>
          </div>

          {/* Step 2: API Keys */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Step 2: Set Up API Keys</h2>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-green-900 mb-3">OpenAI API Key</h3>
              <ol className="list-decimal list-inside space-y-2 text-green-700 mb-4">
                <li>Go to <a href="https://platform.openai.com/api-keys" className="text-green-600 hover:text-green-800 underline">OpenAI API Keys</a></li>
                <li>Click "Create new secret key"</li>
                <li>Give it a descriptive name like "OpenHands-Automation"</li>
                <li>Copy the generated key (starts with sk-)</li>
                <li>Store it securely - you won't be able to see it again</li>
              </ol>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Screenshot Guide:</strong> The OpenAI dashboard shows a "+ Create new secret key" button. 
                  After clicking, you'll see a dialog to name your key and copy the generated token.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-green-900 mb-3">GitHub Personal Access Token</h3>
              <ol className="list-decimal list-inside space-y-2 text-green-700 mb-4">
                <li>Go to <a href="https://github.com/settings/tokens" className="text-green-600 hover:text-green-800 underline">GitHub Settings → Developer settings → Personal access tokens</a></li>
                <li>Click "Generate new token" → "Generate new token (classic)"</li>
                <li>Give it a descriptive name like "OpenHands-Automation"</li>
                <li>Select scopes: <code className="bg-gray-100 px-1 rounded">repo</code>, <code className="bg-gray-100 px-1 rounded">workflow</code>, <code className="bg-gray-100 px-1 rounded">write:packages</code></li>
                <li>Set expiration (recommend 90 days for security)</li>
                <li>Click "Generate token" and copy the token</li>
              </ol>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Screenshot Guide:</strong> In GitHub settings, navigate to Developer settings → Personal access tokens → Tokens (classic). 
                  The form will show checkboxes for different scopes - ensure you select repo, workflow, and write:packages.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg p-4">
              <code className="text-green-400 text-sm">
                # Set environment variables<br/>
                export OPENAI_API_KEY="sk-your-openai-key-here"<br/>
                export GITHUB_TOKEN="ghp_your-github-token-here"<br/><br/>
                # Or create a .env file<br/>
                echo "OPENAI_API_KEY=sk-your-openai-key-here" &gt; .env<br/>
                echo "GITHUB_TOKEN=ghp_your-github-token-here" &gt;&gt; .env
              </code>
            </div>
          </div>

          {/* Step 3: Automation Script */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Step 3: Create Automation Script</h2>
            <p className="text-green-700 mb-4">
              Create a Python script that automatically processes GitHub issues:
            </p>

            <div className="bg-gray-900 rounded-lg p-4 mb-4 overflow-x-auto">
              <code className="text-green-400 text-sm whitespace-pre">
{`#!/usr/bin/env python3
"""
OpenHands GitHub Issue Automation Script
Automatically processes GitHub issues: codes, tests, and deploys solutions.
"""

import os
import time
import requests
import subprocess
from typing import List, Dict
import json

class GitHubIssueProcessor:
    def __init__(self, repo_owner: str, repo_name: str):
        self.repo_owner = repo_owner
        self.repo_name = repo_name
        self.github_token = os.getenv('GITHUB_TOKEN')
        self.openai_api_key = os.getenv('OPENAI_API_KEY')
        self.base_url = f"https://api.github.com/repos/{repo_owner}/{repo_name}"
        
        if not self.github_token:
            raise ValueError("GITHUB_TOKEN environment variable is required")
        if not self.openai_api_key:
            raise ValueError("OPENAI_API_KEY environment variable is required")
    
    def get_open_issues(self) -> List[Dict]:
        """Fetch all open issues from the repository."""
        headers = {
            'Authorization': f'token {self.github_token}',
            'Accept': 'application/vnd.github.v3+json'
        }
        
        response = requests.get(f"{self.base_url}/issues", headers=headers)
        response.raise_for_status()
        
        # Filter out pull requests (they appear as issues in GitHub API)
        issues = [issue for issue in response.json() if 'pull_request' not in issue]
        return issues
    
    def process_issue_with_openhands(self, issue: Dict) -> bool:
        """Process a single issue using OpenHands."""
        issue_number = issue['number']
        issue_title = issue['title']
        issue_body = issue['body'] or ""
        
        print(f"Processing issue #{issue_number}: {issue_title}")
        
        # Create a prompt for OpenHands
        prompt = f"""
        Please help me resolve this GitHub issue:
        
        Title: {issue_title}
        Description: {issue_body}
        
        Repository: {self.repo_owner}/{self.repo_name}
        Issue URL: {issue['html_url']}
        
        Please:
        1. Analyze the issue requirements
        2. Implement the necessary code changes
        3. Test the implementation
        4. Create a pull request with the solution
        5. Ensure the deployment is successful
        
        Make sure to follow best practices and include proper documentation.
        """
        
        try:
            # Here you would integrate with OpenHands API or CLI
            # For now, this is a placeholder for the actual OpenHands integration
            result = self.call_openhands(prompt, issue_number)
            return result
        except Exception as e:
            print(f"Error processing issue #{issue_number}: {str(e)}")
            return False
    
    def call_openhands(self, prompt: str, issue_number: int) -> bool:
        """Call OpenHands to process the issue."""
        # This is where you'd integrate with OpenHands
        # You can use the OpenHands CLI or API
        
        try:
            # Example using OpenHands CLI (adjust based on actual API)
            cmd = [
                'openhands',
                '--task', prompt,
                '--repo', f"{self.repo_owner}/{self.repo_name}",
                '--issue', str(issue_number),
                '--auto-deploy'
            ]
            
            result = subprocess.run(cmd, capture_output=True, text=True, timeout=3600)
            
            if result.returncode == 0:
                print(f"Successfully processed issue #{issue_number}")
                return True
            else:
                print(f"Failed to process issue #{issue_number}: {result.stderr}")
                return False
                
        except subprocess.TimeoutExpired:
            print(f"Timeout processing issue #{issue_number}")
            return False
        except Exception as e:
            print(f"Error calling OpenHands: {str(e)}")
            return False
    
    def check_deployment_status(self, issue_number: int) -> bool:
        """Check if the deployment was successful."""
        # Check GitHub Actions status or deployment status
        headers = {
            'Authorization': f'token {self.github_token}',
            'Accept': 'application/vnd.github.v3+json'
        }
        
        # Get recent workflow runs
        response = requests.get(f"{self.base_url}/actions/runs", headers=headers)
        if response.status_code == 200:
            runs = response.json().get('workflow_runs', [])
            # Check if latest run was successful
            if runs and runs[0]['status'] == 'completed' and runs[0]['conclusion'] == 'success':
                return True
        
        return False
    
    def close_issue(self, issue_number: int, comment: str = None):
        """Close an issue after successful processing."""
        headers = {
            'Authorization': f'token {self.github_token}',
            'Accept': 'application/vnd.github.v3+json'
        }
        
        # Add comment if provided
        if comment:
            comment_data = {'body': comment}
            requests.post(f"{self.base_url}/issues/{issue_number}/comments", 
                         headers=headers, json=comment_data)
        
        # Close the issue
        close_data = {'state': 'closed'}
        response = requests.patch(f"{self.base_url}/issues/{issue_number}", 
                                headers=headers, json=close_data)
        
        if response.status_code == 200:
            print(f"Successfully closed issue #{issue_number}")
        else:
            print(f"Failed to close issue #{issue_number}")
    
    def run_automation(self):
        """Main automation loop."""
        print("Starting GitHub issue automation...")
        
        while True:
            try:
                # Get all open issues
                issues = self.get_open_issues()
                
                if not issues:
                    print("No open issues found. Automation complete.")
                    break
                
                print(f"Found {len(issues)} open issues to process")
                
                # Process each issue
                for issue in issues:
                    issue_number = issue['number']
                    
                    # Process the issue
                    success = self.process_issue_with_openhands(issue)
                    
                    if success:
                        # Wait a bit for deployment
                        time.sleep(30)
                        
                        # Check deployment status
                        if self.check_deployment_status(issue_number):
                            # Close the issue
                            self.close_issue(
                                issue_number, 
                                "✅ Issue resolved automatically by OpenHands. "
                                "Code has been implemented, tested, and deployed successfully."
                            )
                        else:
                            print(f"Deployment check failed for issue #{issue_number}")
                    
                    # Wait between issues to avoid rate limiting
                    time.sleep(10)
                
                # Check for new issues
                print("Checking for new issues...")
                time.sleep(60)  # Wait 1 minute before checking again
                
            except KeyboardInterrupt:
                print("\\nAutomation stopped by user")
                break
            except Exception as e:
                print(f"Error in automation loop: {str(e)}")
                time.sleep(60)  # Wait before retrying

def main():
    # Configure your repository
    REPO_OWNER = "your-username"  # Replace with your GitHub username
    REPO_NAME = "your-repo"       # Replace with your repository name
    
    # Create processor instance
    processor = GitHubIssueProcessor(REPO_OWNER, REPO_NAME)
    
    # Run the automation
    processor.run_automation()

if __name__ == "__main__":
    main()`}
              </code>
            </div>

            <p className="text-green-700 mb-4">Save this as <code className="bg-gray-100 px-1 rounded">github_automation.py</code> and customize the repository settings.</p>
          </div>

          {/* Step 4: Running the Script */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Step 4: Run the Automation</h2>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <code className="text-green-400 text-sm">
                # Make the script executable<br/>
                chmod +x github_automation.py<br/><br/>
                # Run the automation<br/>
                python github_automation.py<br/><br/>
                # Or run in background<br/>
                nohup python github_automation.py &gt; automation.log 2&gt;&1 &amp;
              </code>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">How it works:</h4>
              <ol className="list-decimal list-inside space-y-1 text-green-800 text-sm">
                <li>Script checks for open GitHub issues</li>
                <li>For each issue, it calls OpenHands with the issue details</li>
                <li>OpenHands analyzes, codes, and tests the solution</li>
                <li>Creates a pull request with the implementation</li>
                <li>Monitors deployment status</li>
                <li>Closes the issue when successfully deployed</li>
                <li>Repeats until no more issues remain</li>
              </ol>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-green-100">
            <h2 className="text-2xl font-semibold text-green-900 mb-4">Troubleshooting</h2>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-green-900 mb-2">Rate Limiting</h4>
                <p className="text-green-700 text-sm">
                  GitHub API has rate limits. The script includes delays between requests. 
                  If you hit limits, increase the sleep intervals.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-green-900 mb-2">Authentication Errors</h4>
                <p className="text-green-700 text-sm">
                  Ensure your GitHub token has the correct permissions and hasn't expired. 
                  Check that your OpenAI API key is valid and has sufficient credits.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-green-900 mb-2">OpenHands Integration</h4>
                <p className="text-green-700 text-sm">
                  The script template shows the integration pattern. You'll need to adapt it 
                  based on the specific OpenHands API or CLI interface you're using.
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <Link
              href="/thanks"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-block"
            >
              View Acknowledgments
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}