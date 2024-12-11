import React, { useState, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Link from 'next/link';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const timer = setTimeout(() => setLoading(false), 500);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">Crystal</div>
            <div className="nav-links">
              <a href="https://github.com/vifezdev/crystal-anticheat-web">SRC</a>
              <a href="#purchase">Purchase</a>
              <a href="#discord">Discord</a>
            </div>
          </nav>

          {/* Features 1 */}
          <div className="container">
            <h1>Cyrstal Anticheat</h1>
            <h2>Just another anticheat...</h2>

            <div className="buttons">
              <button className="primary">Discord</button>
              <button className="secondary">Purchase</button>
            </div>

            <div className="grid">
              <div className="card">
                <h3>Optimized</h3>
                <p>
                  While developing Crystal, We made sure
                  to write the most performance efficient
                  code that we possibly could
                </p>
              </div>

              <div className="card">
                <h3>Great checks</h3>
                <p>
                  We have developed our checks attempting to
                  catch every cheat possible in the most
                  performance efficient way.
                </p>
              </div>

              <div className="card">
                <h3>Packet based</h3>
                <p>
                  Crystal tracks actions with packets instead of bukkit events & spigot api
                </p>
              </div>
            </div>
          </div>

          {/* Features 2 */}
          <div className="container" style={{ paddingTop: "100px" }}>
            <h1>Why Choose Crystal?</h1>
            <h2>Explore the benefits of using our client</h2>
            <div className="grid">
              <div className="card">
                <h3>Fast Updates</h3>
                <p>
                  We frequently release updates to ensure compatibility with
                  the latest features and fixes.
                </p>
              </div>

              <div className="card">
                <h3>Great Cheat detector</h3>
                <p>
                  Don't let a cheater slip through with our amazing cheat
                  detector developed to catch cheaters.
                </p>
              </div>

              <div className="card">
                <h3>Community Support</h3>
                <p>
                  Join our active community for support, tips, and exclusive
                  content to enhance your experience.
                </p>
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="container" id="pricing" style={{ paddingTop: "100px" }}>
            <h1>Pricing</h1>
            <h2>Choose the perfect plan for your needs</h2>
            <div className="grid">
              <div className="card">
                <h3>Trial</h3>
                <ul className="features">
                <li><i className="icon-check"></i>• Test out Crystal</li>
                <li><i className="icon-check"></i>• Only $5 </li>
                </ul>
                <p className="price">$5 (7 day trial)</p>
                <button className="primary">Purchase</button>
              </div>

              <div
                className="card featured"
                style={{
                  position: "relative",
                  border: "2px solid #0071f2",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    left: "10px",
                    backgroundColor: "#0071f2",
                    color: "#fff",
                    fontWeight: "bold",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    fontSize: "14px",
                  }}
                >
                  Top Purchased
                </div>
                <h3>Standard License</h3>
                <ul className="features">
                <li><i className="icon-check"></i>• 200+ Checks</li>
                  <li><i className="icon-check"></i>• Frequent Updates</li>
                  <li><i className="icon-check"></i>• Premium Support</li>
                  <li><i className="icon-check"></i>• Extremely customizable</li>
                </ul>
                <p className="price">$20.00 (Lifetime)</p>
                <button className="primary">Purchase</button>
              </div>

              <div className="card">
                <h3>Enterpise</h3>
                <ul className="features">
                <li><i className="icon-check"></i>• 300+ Checks</li>
                  <li><i className="icon-check"></i>• Frequent Updates</li>
                  <li><i className="icon-check"></i>• Prioritized Support</li>
                  <li><i className="icon-check"></i>• Extremely customizable</li>
                </ul>
                <p className="price">$???</p>
                <button className="primary">Contact</button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer style={{ background: "#111111", padding: "20px 0" }}>
            <div className="container">
              <div>
                <h3>Crystal</h3>
                <p>&copy; 2024 Crystal. All Rights Reserved.</p>
              </div>
              <div>
                <h4>Quick Links</h4>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li><a href="https://github.com/vifezdev/crystal-anticheat-web">SRC</a></li>
                  <li><a href="#purchase">Purchase</a></li>
                  <li><a href="#discord">Discord</a></li>
                </ul>
              </div>
            </div>

          {/* Please dont remove the credits lol */}
            <div style={{ marginTop: "-40px", fontSize: "14px", color: "#fff", textAlign: "center" }}>
              <Link href="https://discord.gg/stkWZEKVd5">
                Made by vifez with ❤️
              </Link>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
