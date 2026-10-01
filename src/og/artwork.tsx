// Original OpenElections.in artwork. The ECINet diagram is illustrative, not disclosed architecture.
export default function OgArtwork() {
  return (
    <div
      style={{
        position: "relative",
        width: 1200,
        height: 630,
        backgroundColor: "#eeeee7",
        color: "#243b2e",
        fontFamily: "Manrope",
      }}
    >
      <svg
        width="1200"
        height="630"
        viewBox="0 0 1200 630"
        style={{ position: "absolute", inset: 0 }}
      >
        <g fill="#243b2e">
          <path d="M60 43l7-4v25l-7 4zM72 35l7-4v33l-7 4zM84 47l7-4v21l-7 4z" />
        </g>
        <path d="M60 101H1140M60 520H1140" stroke="#cccec2" />
        <rect x="806" y="151" width="334" height="334" rx="4" fill="#25392e" />
        <g fill="none" stroke="#819768" strokeWidth="1">
          <circle cx="973" cy="318" r="106" opacity=".3" strokeDasharray="2 5" />
          <path d="M973 223V276M883 318H931M1015 318H1062M973 360V413" />
          <circle cx="973" cy="318" r="57" fill="#2f4434" stroke="#a5ba81" />
        </g>
        <g fill="#c4dd91">
          <path d="M961 290l6-3v20l-6 3zM971 283l6-3v27l-6 3zM981 294l6-3v16l-6 3z" />
          <rect x="924" y="196" width="98" height="35" rx="3" />
        </g>
        <g fill="#2a3f30" stroke="#627951">
          <rect x="822" y="301" width="101" height="35" rx="3" />
          <rect x="1024" y="301" width="101" height="35" rx="3" />
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          left: 108,
          top: 35,
          fontSize: 27,
          fontWeight: 750,
          letterSpacing: -1,
        }}
      >
        openelections<span style={{ fontWeight: 400 }}>.in</span>
      </div>
      <div style={{ position: "absolute", right: 60, top: 43, fontSize: 14, color: "#626a60" }}>
        Independent. Nonpartisan.
      </div>
      <div
        style={{
          position: "absolute",
          left: 58,
          top: 148,
          fontSize: 66,
          fontWeight: 580,
          letterSpacing: -2.5,
          lineHeight: "82px",
          whiteSpace: "nowrap",
        }}
      >
        <div>Make source code</div>
        <div>of ECINet/ERONet</div>
        <div style={{ color: "#426b41" }}>public.</div>
      </div>
      <div style={{ position: "absolute", left: 62, top: 421, fontSize: 21, color: "#526149" }}>
        Public code. Future modules. Every update.
      </div>
      <div
        style={{
          position: "absolute",
          left: 924,
          top: 206,
          width: 98,
          textAlign: "center",
          fontSize: 12,
          fontWeight: 650,
          color: "#25392e",
        }}
      >
        Form 6
      </div>
      <div
        style={{
          position: "absolute",
          left: 822,
          top: 312,
          width: 101,
          textAlign: "center",
          fontSize: 11,
          color: "#e0e8d5",
        }}
      >
        Permissions
      </div>
      <div
        style={{
          position: "absolute",
          left: 1024,
          top: 312,
          width: 101,
          textAlign: "center",
          fontSize: 11,
          color: "#e0e8d5",
        }}
      >
        Restoration
      </div>
      <div
        style={{
          position: "absolute",
          left: 916,
          top: 313,
          width: 114,
          textAlign: "center",
          fontSize: 25,
          fontWeight: 650,
          letterSpacing: -1,
          color: "#eeeee7",
        }}
      >
        ECINet
      </div>
      <div
        style={{
          position: "absolute",
          left: 910,
          top: 347,
          width: 126,
          textAlign: "center",
          fontSize: 8,
          letterSpacing: 1,
          color: "#becfa9",
        }}
      >
        ELECTORAL ROLLS
      </div>
      <div
        style={{
          position: "absolute",
          left: 806,
          top: 431,
          width: 334,
          textAlign: "center",
          fontSize: 10,
          letterSpacing: 0.7,
          color: "#becfa9",
        }}
      >
        EVERY MODULE. EVERY RELEASE.
      </div>
      <div style={{ position: "absolute", left: 62, top: 551, fontSize: 17, fontWeight: 650 }}>
        openelections.in
      </div>
      <div style={{ position: "absolute", right: 60, top: 553, fontSize: 15, color: "#626a60" }}>
        Read the evidence. Share the demand.
      </div>
    </div>
  );
}
